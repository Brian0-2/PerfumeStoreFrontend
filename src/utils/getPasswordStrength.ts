    export const getPasswordStrength = (password: string) => {
        if (!password) return { score: 0, text: "", color: "" };

        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        const levels = [
            { score: 0, text: "Muy débil", color: "bg-red-500" },
            { score: 1, text: "Débil", color: "bg-red-400" },
            { score: 2, text: "Regular", color: "bg-yellow-500" },
            { score: 3, text: "Buena", color: "bg-blue-500" },
            { score: 4, text: "Fuerte", color: "bg-green-500" },
            { score: 5, text: "Muy fuerte", color: "bg-green-600" },
        ];

        return levels[score] || levels[0];
    };