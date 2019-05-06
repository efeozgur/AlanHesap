/* eslint-disable no-unused-vars */
// ✔ Dikdörtgen Çevre ve Alanı Hesaplama
const dikdortgen = (uzunkenar, kisakenar) => ({
    cevre: 2 * (uzunkenar + kisakenar),
    alan: uzunkenar * kisakenar
});

// ✔ Kare Çevre ve Alanı Hesaplama
const kare = kenar => ({
    cevre: kenar * 4,
    alan: kenar * kenar
});

// ✔ Dik Üçgen Çevre ve Alanı Hesaplama
const dikUcgen = (kenar1, kenar2) => {
    const hkare = Math.pow(kenar1, 2) + Math.pow(kenar2, 2);
    const h = Math.sqrt(hkare);
    return {
        cevre: kenar1 + kenar2 + h,
        alan: (kenar1 * kenar2) / 2,
        hipotenus: h
    };
};

// ✔ İkizkenar Üçgen Çevre ve Alanı Hesaplama
const ikizkenar = (a, b, c) => {
    const s = (a + b + c) / 2;
    const alan = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return {
        cevre: a + b + c,
        alan
    };
};

// ✔ Eşkenar Üçgen Çevre ve Alanı Hesaplama
const eskenar = (a) => {
    const cevre = a * 3;
    const alan = (Math.sqrt(3) / 4) * (Math.pow(a, 2));
    return {
        cevre, alan
    };
};


// ✔ Çeşitkenar Üçgen Çevre ve Alanı Hesaplama
const cesitKenar = (a, b, c) => {
    const cevre = a + b + c;
    const s = cevre / 2;
    const alan = Math.sqrt((s * (s - a) * (s - b) * (s - c)));
    return {
        cevre, alan
    };
};

// ✔ Daire Çevre ve Alanı Hesaplama
const daire = (cap) => {
    const pi = Math.PI;
    const cevre = 2 * pi * cap;
    const alan = pi * Math.pow(cap, 2);
    return {
        cevre, alan
    };
};

// ✔ Yamuk Çevre ve Alanı Hesaplama
const yamuk = (a, b, c, d, h) => {
    const cevre = a + b + c + d;
    const alan = ((a + b) / 2) * h;
    return { cevre, alan };
};


// ✔ Elips Çevre ve Alanı Hesaplama
const elips = (a, b) => {
    const pi = Math.PI;
    const cevre = (2 * pi) * Math.sqrt((1 / 2) * (Math.pow(a, 2) + Math.pow(b, 2)));
    const alan = pi * a * b;
    return {
        cevre, alan
    };
};

// ✔ Paralelkenar Çevre ve Alanı Hesaplama
const paralelKenar = (b, a, yukseklik) => {
    const alan = b * yukseklik;
    const cevre = (a * 2) + (b * 2);
    return {
        alan, cevre
    };
};

export { paralelKenar, elips, yamuk, daire, cesitKenar, eskenar, ikizkenar, dikUcgen, kare, dikdortgen };