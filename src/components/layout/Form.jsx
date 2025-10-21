import { useEffect, useState } from 'react';

function Form() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [error, setError] = useState(false);
    const [status, setStatus] = useState('')


    // function handleSubmit(e) {
    //   e.preventDefault();

    //   if (!name || !email || !message) {
    //     setError(true);
    //     return;
    //   }

    //   setError(false);
    //   clearInputs();
    // }

    function clearInputs() {
        setname("");
        setemail("");
        setmessage("");
    }

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !email || !message) {
         setError(true);
         return;
       }

        const dados = {
            name: name,
            email: email,
            message: message || '' // se tiver campo de mensagem
        }

        const resposta = await fetch('https://formspree.io/f/xvgqaryk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })

        if (resposta.ok) {
            setStatus('✅ Enviado com sucesso! Entraremos em contato em breve')
        } else {
            const erro = await resposta.json()
            console.log('Erro do Formspree:', erro)
            setStatus('❌ Erro ao enviar. Tente novamente!')
        }
        
       setError(false);
       clearInputs();
    }

    return (
        <>
            {
                error && <div className="fixed bottom-10 left-10 bg-red-400 p-4 rounded text-white shadow-lg">Por favor, preencha todos os campos.</div>
            }
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border">

                {
                    status != "" ? <div>{status}</div> : ""
                }
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Nome</label>
                    <input
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                        required
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black/5 focus:border-black transition-colors duration-200"
                        placeholder="Seu nome"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="email"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black/5 focus:border-black transition-colors duration-200"
                        placeholder="Seu email"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                        className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors duration-200"
                        placeholder="Como podemos ajuda-lo?"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium"
                >
                    Enviar mensagem
                </button>
            </form>
        </>
    )
}

export default Form;