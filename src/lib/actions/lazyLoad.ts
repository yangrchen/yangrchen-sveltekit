const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}
export const lazyLoad = (image: HTMLImageElement, srcset: string) => {
    const loaded = () => {
        image.style.opacity = '1';
    }
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            image.srcset = srcset;

            if (image.complete) {
                loaded()
            } else {
                image.addEventListener('load', loaded)
            }
        }
    }, options);
    observer.observe(image);

    return {
        destroy() {
            image.removeEventListener('load', loaded)
        }
    }
}