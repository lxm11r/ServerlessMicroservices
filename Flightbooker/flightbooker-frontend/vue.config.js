module.exports = {
    devServer: {
<<<<<<< HEAD
        proxy: {
            '^api/': {
                target: 'http://localhost:3000',
                changeOrigin: true
            },
        }
=======
        proxy: 'http://localhost:3000'
>>>>>>> 23366ad7d6e83bddcec413bc3b168827b28efa4f
    }
}