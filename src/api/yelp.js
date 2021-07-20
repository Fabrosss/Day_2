import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer WXO1mdqUHYhUvNE_pBYkfcCezsGKPdCubuXcb63Vbdlz4UAYAh_r8E4pbelNTtuOUODFVg2-mlR9ZWn92NO9_gpL8dvLYgDVT687fa0AYc9BqHS17g5HlpOcc4z2YHYx'
    }
});

