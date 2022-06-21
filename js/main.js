const phone = document.getElementById("phone");
const maskOptions = {
  mask: "+{55} 00 00000 0000",
};
const mask = IMask(phone, maskOptions);

function clean(num) {
  return num.replace(/\D+/g, "");
}

function detectDevice() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

function quick() {
  const whatsapp = clean(phone.value);
  if (whatsapp.length === 13) {
    if (detectDevice()) {
      window.open(`https://api.whatsapp.com/send/?phone=${whatsapp}`);
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${whatsapp}`);
    }
  } else {
    alert("Informe um número de WhatsApp");
  }
}
