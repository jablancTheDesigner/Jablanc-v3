export const generateSlug = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
}

export const scrollToSection = (section: string ) => {
    const scrollOffset = document.getElementById(`${section}`).offsetTop
        window.scroll({
            top: scrollOffset,
            behavior: 'smooth'
          });
}