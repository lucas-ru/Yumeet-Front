import { useState } from "react";

export default (apiFunc) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const request = (...args) => {
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                const result = await apiFunc(...args);
                setData(result.data);
                resolve(result.data)
            } catch (err) {
                setError(err.message || "Unexpected Error!");
                reject(err)
            } finally {
                setLoading(false);
            }
        })
    };

    return {
        data,
        error,
        loading,
        request
    };
};