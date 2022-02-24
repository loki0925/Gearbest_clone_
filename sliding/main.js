const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// Set up the slider

function init() {
  /*   
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}

// Next Button

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  //   set active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}





// now we make RECOMMENDED FOR YOU 

var homePageData = [
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16081/goods_img-v1/d56b91986fa1.jpg",
        name : "KZ ZSN PRO/ZSN PRO X 1BA+1DD KZ Hybrid Earphone",
        price: "$21.86",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16425/goods_img-v1/2101876433d1.jpg",
        name : "New Product form Lapbook Light Handlift Business Office",
        price : "$472.90",
        sale: "promo",
    },
     {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v1/8e4e88499c58.jpg",
        name : "Portable Medical Finger Oximeter Digital Fingertip Pulse",
        price : "$8.50",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16424/goods_img-v4/ea8b0feeb479.jpg",
        name : "Huawei FreeBuds 4 TWS Earphone Active Noise",
        price : "$139.00",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16419/goods_img-v5/2bade2f7be7f.jpg",
        name : "Tronxy Large Size X5SA 24V 3D Printer Factory Price Desktop",
        price : "$289.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6882994787503501312/16426/goods_img-v1/ccfd4012eac4.jpg",
        name : "Flsun Q5 3D Printer Delta Auto-Level Resume 32bits board",
        price : "$219.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16420/goods_img-v1/59bf6346c600.jpg",
        name : "Global Version Smart Mopping Robot SWDK ZDG300S with WIFI",
        price : "$319.00",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v4/a0da751fd8f8.jpg",
        name : "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphones",
        price : "$11.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img-v3/9077ff9db427.jpg",
        name : "Xiaomi Mijia Mini Inflatable Treasure 1S Portable Smart",
        price : "$45.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/62226933ac9c.jpg",
        name : "Samebike 20LVXD30 350W Foldable Electric Bike City Bike",
        price : "$749.00",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16415/goods_img-v1/bd06f0e5891e.jpg",
        name : "Xiaomi Router AX6000 AIoT Router 6000Mbs WiFi 6 VPN",
        price : "$132.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_img-v2/e2e0bae812a7.jpg",
        name : "realme X7 Pro 8GB 128GB Smartphone 5G 6.55inch 120Hz",
        price : "$457.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/78f0e9b9ecce.jpg",
        name : "KUU YoBook M Laptop 13.5 inch 3K IPS Intel Celeron N4020",
        price : "$282.00",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16430/goods_img-v1/9c81c0dda57d.jpg",
        name : "Xiaomi MiJIA 360° PTZ IP Camera SE Horizontal Angle",
        price : "$48.50",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16424/goods_img-v4/9cbfc105f812.jpg",
        name : "Baseus USB Cable for iPhone 13 12 11 Pro Max Xs X 8 Plus Cable",
        price : "$6.92",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16414/goods_img-v3/66f09d0cac15.jpg",
        name : "L900 PRO 5G WIFI FPV Foldable GPS RC Drone Quadcopter with",
        price : "$97.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16418/goods_img-v3/29e552833daa.jpg",
        name : "2022 Global Version Note 10 Pro 6.1 Inch Smartphone Full",
        price : "$129.49",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_img-v1/b53d913f4d24.jpg",
        name : "USLION Magnetic USB Cable For iPhone 12 11 Xiaomi Samsung",
        price : "$4.17",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16050/goods_img-v3/6f8593ec53ba.jpg",
        name : "Artillery 3D Printer Sidewinder X1 SW-X1 High Precision Large",
        price : "$489.90",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16417/goods_img-v7/509decfbf454.jpg",
        name : "Global Version Mi MIX4 Camera Face Recognition Fingerprint",
        price : "$172.24",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16418/goods_img-v3/802b874ae765.jpg",
        name : "1722 Piece Bricks Cada T90 RC Tank Car City Model Building",
        price : "$64.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16093/goods_img-v1/4b3ae121af2f.jpg",
        name : "Original Sony Xperia Z2 D6503 Unlocked Mobile Phone GSM",
        price : "$81.89",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v2/fe704882b084.jpg",
        name : "LONGER LK5 Pro 3D Printer 300x300x400mm Print Size",
        price : "$299.00",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_img-v1/5f26bc001550.jpg",
        name : "Original Xiaomi Redmi Buds 3 Lite Youth Edition Earphone",
        price : "$24.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16425/goods_img-v2/70e70a06c1ca.jpg",
        name : "Neck Hanging Negative Ions Generator Personal Air Purifier",
        price : "$15.92",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16423/goods_img-v1/2f9b88a31113.jpg",
        name : "Xiaomi Aqara Door Window Sensor Zigbee Wireless",
        price : "$21.00",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16418/goods_img-v1/79be908408aa.jpg",
        name : "Xiaomi Mijia Smart IP Camera PTZ 2K 360° WIFI Infrared Night",
        price : "$46.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878402761831149568/16415/goods_img-v1/17c1f772f77c.jpg",
        name : "15.6-inch 4K Resolution Touch Monitor with Built-in Speakers",
        price : "$315.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img-v1/5e4723996cff.jpg",
        name : "Xiaomi Mi Water Immersing Sensor Smart Wireless Water",
        price : "$17.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6880546766379479040/16425/goods_img-v1/ac93e9df47ed.jpg",
        name : "Magicsee C500 max 4K Android dvb s2 Combo Hybrid STB",
        price : "$72.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16092/goods_img-v1/f7025f0f41bd.jpg",
        name : "OPPO Enco W51/X Headset TWS Bluetooth 5.0 Noise",
        price : "$173.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15906/goods_img-v1/cdda5f22bf2e.jpg",
        name : "48W USB Quick Charge 3.0 PD Type C USB Charger for",
        price : "$13.38",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/02/25/goods_img-v1/20200225174243_81283.jpg",
        name : "Ticwris Max 4G Smart Watch Phone Android 7.1 MTK6739",
        price : "$295.40",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16420/goods_img-v4/f76d1ebdc002.jpg",
        name : "SCULPFUN S9 90W Laser Engraving Machine Ultra-thin",
        price : "$456.07",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16097/goods_img-v2/b49dcbce6094.jpg",
        name : "8Bitdo SN30 Pro+ Bluetooth wireless Gamepad Controller",
        price : "$65.34",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/15/goods_img-v11/20200415153520_5e96b938e0ae1.jpg",
        name : "ORTUR Laser Master 2 32-bit Motherboard Laser Engraving",
        price : "$326.10",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/09/goods_img-v2/20191209182106_42821.jpg",
        name : "Ortur Laser Master 15W Desktop Laser Engraver Cutter",
        price : "$302.16",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_img-v1/b16d56b31f5b.jpg",
        name : "EASINE by ILIFE H70 Cordless Wireless Handheld Vacuum",
        price : "$152.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16387/goods_img-v1/8d173e6e0ea6.jpg",
        name : "CHUWI GemiBook Pro 14 inch 2K Screen Laptop 8GB RAM",
        price : "$481.49",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16418/goods_img-v4/b65805b4aa77.jpg",
        name : "Global Version M12 Pro 6.7-inch Smartphone 16G+512G Android",
        price : "$126.77",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16451/goods_img-v1/338fff286585.jpg",
        name : "H10 Sports Smart Watch Call Heart Rate Monitor Bracelet for",
        price : "$19.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16414/goods_img-v1/e637f080d865.jpg",
        name : "2021 New 5G Smartphone S20 Ultra 12+512GB for Samsung",
        price : "$89.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16040/goods_img-v1/84f6615ad37e.jpg",
        name : "Electric Hair Clipper Portable Hair Cutting Trimmer Barber",
        price : "$35.49",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16412/goods_img-v1/fffbe92c9852.jpg",
        name : "Global Version Xiaomi 11 Lite 5G NE 6GB RAM 128GB ROM /",
        price : "$618.12",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/14/goods_img-v1/20190814092835_49064.jpg",
        name : "Teclast F7 Plus 14.1 inch Notebook Intel N4100 8GB RAM",
        price : "$696.08",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16417/goods_img-v1/969dcb267288.jpg",
        name : "Xiaomi Redmi Router AX5 WiFi 6 2.4G /5G Dual Frequency Mes",
        price : "$56.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/Maiyang/2020/07/20/goods_img-v3/20200720143826_5f153be253ec4.jpg",
        name : "TICWRIS RS Smart Watch 1.3 inch Ultra-thin 9mm 50 Days",
        price : "$58.19",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16418/goods_img-v1/79be908408aa.jpg",
        name : "Xiaomi Mijia Smart IP Camera PTZ 2K 360° WIFI Infrared Night",
        price : "$46.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16417/goods_img-v7/509decfbf454.jpg",
        name : "Global Version Mi MIX4 Camera Face Recognition Fingerprint",
        price : "$158.57",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16417/goods_img-v3/5e40e1b471ec.jpg",
        name : "Global Version I12 Pro Max 12GB 512GB Smartphone 5G",
        price : "$136.87",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/05/goods_img-v1/20201105112520_5fa370a01a8e2.jpg",
        name : "Lenovo LP1s Wireless Bluetooth Earbuds Headphone",
        price : "$20.25",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16424/goods_img-v4/d3c7f6523f7b.jpg",
        name : "Wireless Mouse USB Computer Mouse Silent Ergonomic Mouse",
        price : "$8.62",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16419/goods_img-v3/fce0d9b4bc6b.jpg",
        name : "V9 RC Mini Drone 4k Dual Camera HD Wide Angle Camera",
        price : "$54.63",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/04/goods_img-v1/20201204163102_5fc9f3c6439c2.jpg",
        name : "X96 S400 TV Stick Android 10 Allwinner H313 Quad Core 4K",
        price : "$70.13",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16418/goods_img-v3/8440da1972ef.jpg",
        name : "Global Version S22 Ultra 6.93 inch full screen 2400x3200",
        price : "$179.26",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15984/goods_img-v14/46c18da5beca.jpg",
        name : "4WD RC Car Updated Version 2.4G Radio Control RC Car Toys",
        price : "$40.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16092/goods_img-v1/3f2b87717171.jpg",
        name : "MAIWO K104 2.5 inch USB 3.0 SATA HDD Box 3TB Hard Disk",
        price : "$12.90",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16045/goods_img-v1/39dae2f14503.jpg",
        name : "2 In 1 Tablet Laptop 11.6 Inch Android Tablet PC Deca Cores",
        price : "$261.78",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16179/goods_img-v4/0ecbe66e38aa.jpg",
        name : "2021 SANLEPUS ECG Smart Watch Bluetooth Call",
        price : "$55.98",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15916/goods_img-v5/2f8f156785d2.jpg",
        name : "Mijia G1 Robot Vacuum Cleaner Wet Mopping Auto Sweeping",
        price : "$269.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v3/4b0ffdc40949.jpg",
        name : "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphones",
        price : "$11.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/27/goods_img-v2/20200927181201_5f706571f2ec4.jpg",
        name : "Teclast M40 10.1 inch Tablet PC UNISOC T618 Octa Core 6GB",
        price : "$325.21",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_img-v2/1aa72ea68100.jpg",
        name : "Wifi Amplifier Pro 300M Signal Enhanced Repeater Wireless",
        price : "$14.49",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_img-v2/4a562b582246.jpg",
        name : "H50 RK3318 Smart TV Box Android 10.0 4GB 32GB 64GB",
        price : "$75.90",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16427/goods_img-v3/ba85ce4e0f76.jpg",
        name : "K99 Max Drone 4K HD Dual Camera Obstacle Avoidance",
        price : "$44.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/08/goods_img-v1/20201208181022_5fcf510e99c12.jpg",
        name : "Lenovo L101 Sound Box Audio Desktop Home Laptop Wired",
        price : "$37.72",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/20/goods_img-v8/20200820150038_58195.jpg",
        name : "CORN WB05 Bluetooth Call Smart Watch 90 Days Standby",
        price : "$69.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15919/goods_img-v25/2204efa7b84e.jpg",
        name : "Mi Band 5 Smart Bracelet 4 Color AMOLED Screen Miband ",
        price : "$45.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/10/goods_img-v1/20201210165215_5fd1e1bf51166.jpg",
        name : "Xiaomi Redmi REDMIWT01 Smart Watch Heart Rate Sleep",
        price : "$108.56",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16395/goods_img-v1/2fac9d73c34a.jpg",
        name : "1080P Wireless IP Camera Wifi Intelligent Auto Tracking mini",
        price : "$44.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/01/goods_img-v2/20191101133446_5dbbc3f622102.jpg",
        name : "120 inch 16: 9 High Brightness Projector Screen",
        price : "$72.14",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2021/04/26/goods_img-v8/20210426093712_608619482bf51.jpg",
        name : "S3 HD 4K Folding Dual Camera RC Drone Brushless GPS Aerial",
        price : "$211.08",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16045/goods_img-v1/fbea76682706.jpg",
        name : "Oclean Brush Head Replacements",
        price : "$31.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16395/goods_img-v3/53fee1b2a1d3.jpg",
        name : "Hair Cutting Machine Trimmer For Men Machine Rechargeable",
        price : "$29.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/Maiyang/2019/09/03/goods_img-v1/20190903120659_5d6de6e30f50a.jpg",
        name : "Alfawise C10 Pro CNC Laser GRBL Control DIY Engraving",
        price : "$353.84",
        sale: "",
    },

    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/06/15/goods_img-v1/20200615113728_5ee6ecf8a4eaa.jpg",
        name : "Dustproof Anti-fog Breathable 5 Ply Earloop Face Mask",
        price : "$37.82",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16061/goods_img-v3/6ab0c98eea8e.jpg",
        name : "LCD Writing Tablet Blackboard With Pen 20 inch Digital",
        price : "$46.47",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16418/goods_img-v1/c229aa237d16.jpg",
        name : "ELERA Baby Thermometer Infrared Digital LCD Body",
        price : "$59.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16399/goods_img-v1/169035b38b38.jpg",
        name : "P50 PRO 5G Smartphone 16GB+1TB 8000mAh 64MP",
        price : "$263.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16404/goods_img-v2/1de680f05442.jpg",
        name : "Robot Vacuum Cleaner Hepa Filter Main Brush For Xiaomi M",
        price : "$29.15",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15916/goods_img-v1/b462a5f87930.jpg",
        name : "Male Mechanical Watch Automatic Hollow Tourbillon",
        price : "$63.98",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/15/goods_img-v1/20200915152910_5f606d4663280.jpg",
        name : "TECLAST M18 4G Tablet PC 10.8 inch Heilo X27 Ten Core 4GB",
        price : "$351.33",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_img-v2/4a562b582246.jpg",
        name : "H50 RK3318 Smart TV Box Android 10.0 4GB 32GB 64GB",
        price : "$120",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16100/goods_img-v1/8829768f6488.jpg",
        name : "World Premiere In Stock Global Version POCO M3 Smartphone",
        price : "$179.06",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16389/goods_img-v1/3c4782399f66.jpg",
        name : "External Hard Drives 1tb Hard Disk 1000g disco duro externo",
        price : "$30.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16450/goods_img-v3/707c6c969ab2.jpg",
        name : "4GB RAM 64GB ROM Note 8t 6.0inch face ID unlocked",
        price : "$78.78",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_img-v4/a81640efbcd4.jpg",
        name : "Fashion summer t-shirt men&39s 2021 3D Eagle print",
        price : "$9.72",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16426/goods_img-v5/945d873baa82.jpg",
        name : "Fairywill FW507 Sonic Electric Toothbrush 5 Modes USB",
        price : "$22.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16055/goods_img-v1/ca3e0ff46291.jpg",
        name : "XGODY Mobile Phone Android 9.0 6.53 inch Waterdrop Dual",
        price : "$87.98",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16416/goods_img-v2/195162734089.jpg",
        name : "Original Lenovo LP1S TWS Bluetooth Earphone Sports",
        price : "$23.80",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_img-v5/439ba0fd0b82.jpg",
        name : "Xiaomi Redmi Note 9 Pro 5G 6GB RAM 128GB ROM",
        price : "$375.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16450/goods_img-v3/494dee022bcc.jpg",
        name : "UMIDIGI Power 5S Global Version Smartphone 4GB 64GB",
        price : "$158.38",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_img-v2/bb6927d78ad9.jpg",
        name : "Kawaii Disney Cartoon Stitch T Shirt Men/Women Ohana Lilo",
        price : "$8.78",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16450/goods_img-v3/00e21c4e1152.jpg",
        name : "Unlocked LG G6 Single Sim Korean Version G600 Mobile",
        price : "$126.31",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16450/goods_img-v3/641b51a0c797.jpg",
        name : "Global ROM Coolpad Cool 20 4GB 64GB 128GB Smartphone",
        price : "$212.83",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16450/goods_img-v3/0e84f4557f26.jpg",
        name : "Original New SOYES S10H Mini Mobile Phone 4G LTE 3G 64G",
        price : "$160.58",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16448/goods_img-v5/30e80156f794.jpg",
        name : "Official Global ROM Honor 10 Lite Smartphone Android 9",
        price : "$221.02",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16450/goods_img-v3/35f843d7d4eb.jpg",
        name : "2021 Global Version Mi 11 Smart Phone 16GB 512GB 10",
        price : "$143.98",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16450/goods_img-v1/9f169bd7f3f4.jpg",
        name : "HONOR Band 6 Smart Watch Bracelet Heart Rate Monitor",
        price : "$79.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878027957345120256/16428/goods_img-v1/5e047794a7c0.jpg",
        name : "2022 New Mens Fashion Quartz Watches Unique Large Dial",
        price : "$17.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_img-v4/1041d34be31e.jpg",
        name : "YASUGUOJI Plain Oversized T Shirt Men Bodybuilding and",
        price : "$17.98",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878030991047454720/16449/goods_img-v1/7569fd3dd9d9.jpg",
        name : "Ezonetronics CarPlay Android Ai Box Wired To Wireless Android9",
        price : "$159.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878026654363611136/16449/goods_img-v1/6cab98959d4d.jpg",
        name : "N76 Smart Watch 7 Series Rightangle Metal Frame 44mm",
        price : "$34.20",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16427/goods_img-v1/31e1ebcaaac2.jpg",
        name : "Roborock S6 Pure Vacuum Cleaner Automatic Smart",
        price : "$539.00",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_img-v3/7ca1d4a10b69.jpg",
        name : "Letdiffery Cool Stainless Steel Rotatable Men Ring High",
        price : "$6.01",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_img-v3/67eee8b02972.jpg",
        name : "COOLTIME Stainless Steel Couple Rings Silver Color",
        price : "$6.01",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15935/goods_img-v1/f2e4d9e0e080.jpg",
        name : "For Sony PS4 Controller Bluetooth Vibration Gamepad",
        price : "$33.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16369/goods_img-v3/ec3a5b9b9920.jpg",
        name : "UMIDIGI Power 5 Global Version 128GB Smartphone",
        price : "$219.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16424/goods_img-v4/d051b57fb820.jpg",
        name : "Gaming Mouse Rechargeable 2.4GWireless Bluetooth Mouse",
        price : "$12.68",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16383/goods_img-v2/6cd0ff50b049.jpg",
        name : "Lenovo LP40 TWS Wireless Earphone Bluetooth 5.0 Dual",
        price : "$33.30",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_img-v1/e2ca840453ae.jpg",
        name : "Original Xiaomi Redmi AirDots TWS Bluetooth Wireless",
        price : "$19.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15893/goods_img-v1/f0c4d7bb75e3.jpg",
        name : "3 size Plant Grow Bags home garden Potato pot greenhouse",
        price : "$14.70",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16093/goods_img-v1/a05cdfcb432d.jpg",
        name : "KOSPET Prime SE 1GB 16GB relogio inteligente smart watch",
        price : "$125.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15960/goods_img-v2/3f55dfe12965.jpg",
        name : "Original Eken H9R / H9 Ultra HD 4K Action Camera 30m",
        price : "$55.41",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15948/goods_img-v1/c69026688e05.jpg",
        name : "OUKITEL WP6 10000mAh 6.3 inch FHD+ IP68 Waterproof",
        price : "$219.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16417/goods_img-v1/7b720a2fc06a.jpg",
        name : "New Bone Conduction Bluetooth 5.1 Compatible Non",
        price : "$10.99",
        sale: "Flash Sale",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15979/goods_img-v1/69702d4145f9.jpg",
        name : "Global Version Huawei P40 Pro 5G 8GB 256GB Kirin 990",
        price : "$875.59",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15894/goods_img-v1/f2ee9e7da857.jpg",
        name : "L21 Bluetooth Earphone Wireless Earbuds 5.0 TWS",
        price : "$21.91",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_img-v4/8d96ee410c94.jpg",
        name : "T Shirt Men Autumn Winter Men Long Sleeve Tshirt Stripe",
        price : "$9.36",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16043/goods_img-v2/9c3494b6348d.jpg",
        name : "USB Powered Heated Vest Men Women Smart Electric Heating",
        price : "$34.58",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16152/goods_img-v1/8def620e18fd.jpg",
        name : "Original Lenovo LP1S TWS Bluetooth Earphone Sports",
        price : "$16.49",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15900/goods_img-v1/d6a847b8d5b8.jpg",
        name : "30000mAh Sense 8+ Power Bank Portable External Battery",
        price : "$32.72",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16111/goods_img-v4/8b38591f88b7.jpg",
        name : "10 inch Tablet PC Android 7.0 Google Market 3G Phone Call",
        price : "$124.50",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15978/goods_img-v5/f8cc70d4609e.jpg",
        name : "Creality 3D New Ender 3 Ender-3 PRO DIY 3D Printer drucker",
        price : "$208.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15927/goods_img-v3/674eab74e85f.jpg",
        name : "Kodak Micro SD Memory Card 16GB 32GB 64GB 128GB Class",
        price : "$91.43",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15946/goods_img-v1/2bf4e2d00d60.jpg",
        name : "DJI Phantom 4 Pro V2.0 Plus V2.0 Drone with 4K HD 60fps",
        price : "$1849.00",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15966/goods_img-v2/34797eb58409.jpg",
        name : "DEKO New Series 12V 16V 20V Cordless Drill Screwdriver Mini",
        price : "$34.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16055/goods_img-v1/d52d3e75598b.jpg",
        name : "Cubot C30 48MP Quad AI Camera 8GB+256GB 32MP",
        price : "$219.74",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15966/goods_img-v1/843591f3048d.jpg",
        name : "HOMTOM HT80 IP68 Waterproof Smartphone 4G LTE",
        price : "$99.99",
        sale: "",
    },
    {
        Image : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v3/d57083157b4c.jpg",
        name : "4DRC 2021 New 4K HD dual camera with GPS 5G WIFI wide",
        price : "$65.68",
        sale: "",
    },
   
    // {
    //     Image : "",
    //     name : "",
    //     price : "",
    //     sale: "",
    // },

]



 homePageData.map(function(element,index,array){
   var childdiv = document.createElement("div");

   var image = document.createElement("img");
    image.setAttribute("src",element.Image);
    image.setAttribute("id","photo");
   var name = document.createElement("p");
   name.setAttribute("id","p1");
    name.innerText=element.name;
   var price = document.createElement("P");
    price.innerText= element.price;
   price.setAttribute("id","p2");
   var sale = document.createElement("P");
   sale.setAttribute("id","p3");
    sale.innerText = element.sale;
  childdiv.append(image,name,price,sale);
  document.querySelector("#parent").append(childdiv);
         
   })