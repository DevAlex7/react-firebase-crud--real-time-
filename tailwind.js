module.exports={
    theme:{
        extend:{
            colors:{
                'custom-pink' : '#ff1654',
                'custom-pink-level-5' : '#e9345f',
                'custom-pink-level-4' : '#eb466e',
                'custom-pink-level-3' : '#ed577b',
                'custom-red' : '#d80032',
                'custom-purple' : '#6e44ff',
                'custom-purple-level-1' : '#cdc7e5',
                'custom-purple-level-2' : '#aeb8fe',
                'custom-purple-level-3' : '#858ae3',
                'custom-green'  : '#6eeb83',
                'custom-orange' : '#df7373',
                'custom-orange-level-2' : '#e39695',
                'custom-brown-level-1':'#fad4c0',
                'custom-brown-level-2' :'#e6b89c'

            }
        }
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
    ]
}