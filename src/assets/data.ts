export const socials = [
    {logo: 'bx bxl-youtube'},
    {logo: 'bx bxl-instagram'},
    {logo: 'bx bxl-linkedin'},
    {logo: 'bx bxl-github'},
];
export const info = [
    {text: 'about', titleText: 'About' },
    {text: 'projects',titleText: 'Projects' },
];
function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}