import { useState } from "react";

const MessageForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    return (
        <div className="w-full p-4">
            <div className="h-full p-4 md:p-10 border-2 border-gray-300 rounded-md">
                <h2 className="text-xl font-bold text-left">Send a Message</h2>
                <form action="submit" className="flex flex-col gap-3 text-left mt-5">
                    <label htmlFor="name" className="font-bold">Your name</label>
                    <input type="text"
                        placeholder="John Doe"
                        className="border-2 border-gray-300 rounded-md p-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email" className="font-bold">Your Email</label>
                    <input type="email" placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2"
                    />
                    <label htmlFor="message" className="font-bold">Message</label>
                    <textarea placeholder="Your Message here..."
                        value={message} onChange={(e) => setMessage(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2 h-32"
                    />
                    <button className="outline-none bg-blue-800 hover:bg-blue-900 text-white rounded-md p-2 mt-2" type="submit" >Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default MessageForm;