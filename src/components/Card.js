import React from 'react'

const Card = ({ title, body }) => {
    return (
        
            <div class="max-w-sm rounded overflow-hidden shadow-lg max-w-md w-full">
                <img class="w-full" src='https://picsum.photos/200/100' alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-700 text-base">
                        {body}
                    </p>
                </div>
            </div>
    )
}

export default Card
