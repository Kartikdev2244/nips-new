"use client"
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

export const GalleryShowcAse = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div className='text-black  flex flex-col'>
            <div className=" p-5">
                <PhotoAlbum photos={photos} layout="masonry" onClick={({ index }) => setIndex(index)} />
                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>

        </div>
    )
}
