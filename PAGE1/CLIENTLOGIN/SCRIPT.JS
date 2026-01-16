function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./IMG/male0001.png
     ./IMG/male0002.png
     ./IMG/male0003.png
     ./IMG/male0004.png
     ./IMG/male0005.png
     ./IMG/male0006.png
     ./IMG/male0007.png
     ./IMG/male0008.png
     ./IMG/male0009.png
     ./IMG/male0010.png
     ./IMG/male0011.png
     ./IMG/male0012.png
     ./IMG/male0013.png
     ./IMG/male0014.png
     ./IMG/male0015.png
     ./IMG/male0016.png
     ./IMG/male0017.png
     ./IMG/male0018.png
     ./IMG/male0019.png
     ./IMG/male0020.png
     ./IMG/male0021.png
     ./IMG/male0022.png
     ./IMG/male0023.png
     ./IMG/male0024.png
     ./IMG/male0025.png
     ./IMG/male0026.png
     ./IMG/male0027.png
     ./IMG/male0028.png
     ./IMG/male0029.png
     ./IMG/male0030.png
     ./IMG/male0031.png
     ./IMG/male0032.png
     ./IMG/male0033.png
     ./IMG/male0034.png
     ./IMG/male0035.png
     ./IMG/male0036.png
     ./IMG/male0037.png
     ./IMG/male0038.png
     ./IMG/male0039.png
     ./IMG/male0040.png
     ./IMG/male0041.png
     ./IMG/male0042.png
     ./IMG/male0043.png
     ./IMG/male0044.png
     ./IMG/male0045.png
     ./IMG/male0046.png
     ./IMG/male0047.png
     ./IMG/male0048.png
     ./IMG/male0049.png
     ./IMG/male0050.png
     ./IMG/male0051.png
     ./IMG/male0052.png
     ./IMG/male0053.png
     ./IMG/male0054.png
     ./IMG/male0055.png
     ./IMG/male0056.png
     ./IMG/male0057.png
     ./IMG/male0058.png
     ./IMG/male0059.png
     ./IMG/male0060.png
     ./IMG/male0061.png
     ./IMG/male0062.png
     ./IMG/male0063.png
     ./IMG/male0064.png
     ./IMG/male0065.png
     ./IMG/male0066.png
     ./IMG/male0067.png
     ./IMG/male0068.png
     ./IMG/male0069.png
     ./IMG/male0070.png
     ./IMG/male0071.png
     ./IMG/male0072.png
     ./IMG/male0073.png
     ./IMG/male0074.png
     ./IMG/male0075.png
     ./IMG/male0076.png
     ./IMG/male0077.png
     ./IMG/male0078.png
     ./IMG/male0079.png
     ./IMG/male0080.png
     ./IMG/male0081.png
     ./IMG/male0082.png
     ./IMG/male0083.png
     ./IMG/male0084.png
     ./IMG/male0085.png
     ./IMG/male0086.png
     ./IMG/male0087.png
     ./IMG/male0088.png
     ./IMG/male0089.png
     ./IMG/male0090.png
     ./IMG/male0091.png
     ./IMG/male0092.png
     ./IMG/male0093.png
     ./IMG/male0094.png
     ./IMG/male0095.png
     ./IMG/male0096.png
     ./IMG/male0097.png
     ./IMG/male0098.png
     ./IMG/male0099.png
     ./IMG/male0100.png
     ./IMG/male0101.png
     ./IMG/male0102.png
     ./IMG/male0103.png
     ./IMG/male0104.png
     ./IMG/male0105.png
     ./IMG/male0106.png
     ./IMG/male0107.png
     ./IMG/male0108.png
     ./IMG/male0109.png
     ./IMG/male0110.png
     ./IMG/male0111.png
     ./IMG/male0112.png
     ./IMG/male0113.png
     ./IMG/male0114.png
     ./IMG/male0115.png
     ./IMG/male0116.png
     ./IMG/male0117.png
     ./IMG/male0118.png
     ./IMG/male0119.png
     ./IMG/male0120.png
     ./IMG/male0121.png
     ./IMG/male0122.png
     ./IMG/male0123.png
     ./IMG/male0124.png
     ./IMG/male0125.png
     ./IMG/male0126.png
     ./IMG/male0127.png
     ./IMG/male0128.png
     ./IMG/male0129.png
     ./IMG/male0130.png
     ./IMG/male0131.png
     ./IMG/male0132.png
     ./IMG/male0133.png
     ./IMG/male0134.png
     ./IMG/male0135.png
     ./IMG/male0136.png
     ./IMG/male0137.png
     ./IMG/male0138.png
     ./IMG/male0139.png
     ./IMG/male0140.png
     ./IMG/male0141.png
     ./IMG/male0142.png
     ./IMG/male0143.png
     ./IMG/male0144.png
     ./IMG/male0145.png
     ./IMG/male0146.png
     ./IMG/male0147.png
     ./IMG/male0148.png
     ./IMG/male0149.png
     ./IMG/male0150.png
     ./IMG/male0151.png
     ./IMG/male0152.png
     ./IMG/male0153.png
     ./IMG/male0154.png
     ./IMG/male0155.png
     ./IMG/male0156.png
     ./IMG/male0157.png
     ./IMG/male0158.png
     ./IMG/male0159.png
     ./IMG/male0160.png
     ./IMG/male0161.png
     ./IMG/male0162.png
     ./IMG/male0163.png
     ./IMG/male0164.png
     ./IMG/male0165.png
     ./IMG/male0166.png
     ./IMG/male0167.png
     ./IMG/male0168.png
     ./IMG/male0169.png
     ./IMG/male0170.png
     ./IMG/male0171.png
     ./IMG/male0172.png
     ./IMG/male0173.png
     ./IMG/male0174.png
     ./IMG/male0175.png
     ./IMG/male0176.png
     ./IMG/male0177.png
     ./IMG/male0178.png
     ./IMG/male0179.png
     ./IMG/male0180.png
     ./IMG/male0181.png
     ./IMG/male0182.png
     ./IMG/male0183.png
     ./IMG/male0184.png
     ./IMG/male0185.png
     ./IMG/male0186.png
     ./IMG/male0187.png
     ./IMG/male0188.png
     ./IMG/male0189.png
     ./IMG/male0190.png
     ./IMG/male0191.png
     ./IMG/male0192.png
     ./IMG/male0193.png
     ./IMG/male0194.png
     ./IMG/male0195.png
     ./IMG/male0196.png
     ./IMG/male0197.png
     ./IMG/male0198.png
     ./IMG/male0199.png
     ./IMG/male0200.png
     ./IMG/male0201.png
     ./IMG/male0202.png
     ./IMG/male0203.png
     ./IMG/male0204.png
     ./IMG/male0205.png
     ./IMG/male0206.png
     ./IMG/male0207.png
     ./IMG/male0208.png
     ./IMG/male0209.png
     ./IMG/male0210.png
     ./IMG/male0211.png
     ./IMG/male0212.png
     ./IMG/male0213.png
     ./IMG/male0214.png
     ./IMG/male0215.png
     ./IMG/male0216.png
     ./IMG/male0217.png
     ./IMG/male0218.png
     ./IMG/male0219.png
     ./IMG/male0220.png
     ./IMG/male0221.png
     ./IMG/male0222.png
     ./IMG/male0223.png
     ./IMG/male0224.png
     ./IMG/male0225.png
     ./IMG/male0226.png
     ./IMG/male0227.png
     ./IMG/male0228.png
     ./IMG/male0229.png
     ./IMG/male0230.png
     ./IMG/male0231.png
     ./IMG/male0232.png
     ./IMG/male0233.png
     ./IMG/male0234.png
     ./IMG/male0235.png
     ./IMG/male0236.png
     ./IMG/male0237.png
     ./IMG/male0238.png
     ./IMG/male0239.png
     ./IMG/male0240.png
     ./IMG/male0241.png
     ./IMG/male0242.png
     ./IMG/male0243.png
     ./IMG/male0244.png
     ./IMG/male0245.png
     ./IMG/male0246.png
     ./IMG/male0247.png
     ./IMG/male0248.png
     ./IMG/male0249.png
     ./IMG/male0250.png
     ./IMG/male0251.png
     ./IMG/male0252.png
     ./IMG/male0253.png
     ./IMG/male0254.png
     ./IMG/male0255.png
     ./IMG/male0256.png
     ./IMG/male0257.png
     ./IMG/male0258.png
     ./IMG/male0259.png
     ./IMG/male0260.png
     ./IMG/male0261.png
     ./IMG/male0262.png
     ./IMG/male0263.png
     ./IMG/male0264.png
     ./IMG/male0265.png
     ./IMG/male0266.png
     ./IMG/male0267.png
     ./IMG/male0268.png
     ./IMG/male0269.png
     ./IMG/male0270.png
     ./IMG/male0271.png
     ./IMG/male0272.png
     ./IMG/male0273.png
     ./IMG/male0274.png
     ./IMG/male0275.png
     ./IMG/male0276.png
     ./IMG/male0277.png
     ./IMG/male0278.png
     ./IMG/male0279.png
     ./IMG/male0280.png
     ./IMG/male0281.png
     ./IMG/male0282.png
     ./IMG/male0283.png
     ./IMG/male0284.png
     ./IMG/male0285.png
     ./IMG/male0286.png
     ./IMG/male0287.png
     ./IMG/male0288.png
     ./IMG/male0289.png
     ./IMG/male0290.png
     ./IMG/male0291.png
     ./IMG/male0292.png
     ./IMG/male0293.png
     ./IMG/male0294.png
     ./IMG/male0295.png
     ./IMG/male0296.png
     ./IMG/male0297.png
     ./IMG/male0298.png
     ./IMG/male0299.png
     ./IMG/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
var video = document.getElementById("myVideo");