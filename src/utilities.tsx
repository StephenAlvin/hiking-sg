export function openWhatsAppContact(){
    const phoneNumber = "+6596503241";
    const message = "Hello, I'm interested in your hiking services. Can you provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
}