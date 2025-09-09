import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCustomerOrders, getCustomerOrder } from "@/api/CustomerAPI";
import { formatDate, formatCurrency } from "@/utils/formater";
import Pagination from "@/ui/Pagination";
import Modal from "@/ui/Modal";
import CircleLoader from "@/ui/CircleLoader";
import Button from "@/ui/Button";
import { usePagination } from "@/hooks/usePagination";

export default function OrderCustomerView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedOrderId = searchParams.get("customerOrderId");

  const {
    page,
    goToPage,
    nextPage,
    prevPage,
    setFilter,
    params,
  } = usePagination({ page: 1, perPage: 2 });

  const {
    data: orders,
    isFetching: fetchingOrders,
  } = useQuery({
    queryKey: ["orders", params],
    queryFn: () => getCustomerOrders(params),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const {
    data: order,
    isFetching: isOrderFetching,
    error: orderError,
  } = useQuery({
    queryKey: ["customerOrder", selectedOrderId],
    queryFn: () => getCustomerOrder({ id: selectedOrderId! }),
    enabled: !!selectedOrderId,
    retry: false,
  });

  // Abrir modal
  const openModal = (id: number) => {
    searchParams.set("customerOrderId", id.toString());
    setSearchParams(searchParams);
  };

  // Cerrar modal
  const closeModal = () => {
    searchParams.delete("customerOrderId");
    setSearchParams(searchParams);
  };

  if (orders)
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 mb-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mis Pedidos</h1>
        {fetchingOrders && (
          <CircleLoader
            width="w-12"
            height="h-12"
            feedBackText="Cargando pedidos..."
          />
        )}
        {!orders.data.length && (
          <h2 className="text-2xl font-semibold text-gray-900">
            No tienes pedidos aun...
          </h2>
        )}
        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {orders.data.map((orderItem) => (
            <li
              key={orderItem.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold text-gray-800">
                  Pedido #{orderItem.id}
                </h2>
                <p className="text-sm text-gray-500">
                  Realizado el{" "}
                  <span className="font-medium">
                    {formatDate(orderItem.createdAt)}
                  </span>
                </p>

                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-600 font-bold">Entrega</p>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                        orderItem.order_status.name === "Pendiente"
                          ? "bg-yellow-400 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {orderItem.order_status.name === "Pendiente"
                        ? "Pendiente"
                        : "Completado"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-600 font-bold">Pago</p>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                        orderItem.is_paid
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {orderItem.is_paid ? "Pagado" : "Pendiente"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-bold">Total</p>
                  <p className="text-gray-700 font-medium text-lg">
                    {formatCurrency(orderItem.total)}
                  </p>
                </div>
                <Button
                  onClick={() => openModal(orderItem.id)}
                  className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
                >
                  Ver detalles
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Pagination
          currentPage={orders.meta.current_page}
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
          meta={{
            last_page: orders.meta?.last_page,
            from: orders.meta?.from,
            to: orders.meta?.to,
            total: orders.meta?.total,
          }}
        />
        <div className="flex gap-2 mt-6">
          <Button onClick={() => setFilter({ status: "pending", page })}>
            Pendientes
          </Button>
          <Button onClick={() => setFilter({ status: "completed", page })}>
            Completados
          </Button>
        </div>
        {/* Modal */}
        <Modal
          isOpen={!!selectedOrderId}
          onRequestClose={closeModal}
          contentLabel={`Detalles del Pedido #${order?.id || selectedOrderId}`}
        >
          {isOrderFetching ? (
            <CircleLoader
              width="w-10"
              height="h-10"
              feedBackText="Cargando Detalles..."
            />
          ) : order ? (
            <div className="space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p className="text-gray-600">
                  Estado:{" "}
                  <span className="font-medium">
                    {order.order_status.name}
                  </span>
                </p>
                <p className="text-gray-600">
                  Fecha:{" "}
                  <span className="font-medium">
                    {formatDate(order.createdAt)}
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Productos
                </h3>
                <ul className="divide-y divide-gray-200">
                  {order.order_items.map((item: any, index: number) => (
                    <li key={index} className="py-3 flex items-center gap-4">
                      <img
                        src={item.perfume.image_url}
                        alt={item.perfume.name}
                        className="h-30 w-30 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 w-full">
                        <div className="flex flex-col">
                          <p className="font-medium text-gray-800">
                            {item.perfume.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.perfume.size}
                          </p>
                          <p className="text-sm text-gray-500">
                            Marca: {item.perfume.brand.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            pz: x {item.quantity}
                          </p>
                          <p className="text-gray-800 text-sm">
                            p/u: {formatCurrency(item.price_sell)}
                          </p>
                          <p className="text-sm text-gray-500">
                            Total:{" "}
                            {formatCurrency(
                              Number(item.price_sell) * Number(item.quantity)
                            )}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                  <div className="flex justify-end mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner w-full sm:w-64">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-gray-600">Pagado:</span>
                        <span className="text-gray-800 text-right font-medium">
                          {formatCurrency(order.amount_paid)}
                        </span>
                        <span className="text-gray-600">Pendiente:</span>
                        <span className="text-gray-800 text-right font-medium">
                          {formatCurrency(
                            Number(order.total) - Number(order.amount_paid)
                          )}
                        </span>
                        <span className="text-gray-800 font-bold">Total:</span>
                        <span className="text-gray-800 text-right font-bold">
                          {formatCurrency(order.total)}
                        </span>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-center py-10 text-gray-500">
              {orderError?.message}
            </p>
          )}
        </Modal>
      </div>
    );
}
