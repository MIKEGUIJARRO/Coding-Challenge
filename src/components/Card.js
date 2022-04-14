import React from 'react'

const Card = ({ id, title, body }) => {
    return (
        <div ket={id} className="max-w-sm rounded overflow-hidden shadow-lg max-w-md w-full">
            <img className="w-full" src='https://picsum.photos/200/100' alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {body}
                </p>
            </div>
        </div>
    )
}

export default Card
