const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/jobs`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        });
        return res.json();
    } catch (err) {
        console.log(err)
    }
}
const show = async (jobId) => {
    try {
        const res = await fetch(`${BASE_URL}/${jobId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
}

const create = async (jobFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST", 
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`, 
                'content-type': 'application/json',
            },
            body: JSON.stringify(jobFormData), 
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
}

export {
    index,
    show,
    create
}