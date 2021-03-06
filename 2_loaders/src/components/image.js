import Img from '../img/baladinha.jpg';

class Image {

    insertBobImage() {
        const img = document.createElement('img');

        img.src = Img;
        img.width = 200;

        document.querySelector('body').appendChild(img);
    }

}

export default Image;