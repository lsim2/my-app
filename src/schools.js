const schools = [
  {name: "United World College of the Atlantic", region: "Europe", age: "15-19", location: "Llantwit Major, United Kingdom", founded: 1962, image: 'https://i.ytimg.com/vi/235B2CrZ2aY/maxresdefault.jpg'},
  {name: "Lester B. Pearson College of the Pacific", region: "Americas", age: "16-19", location: "Victoria, Canada", founded: 1974, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Floating_Building%2C_Pearson_UWC.jpg/220px-Floating_Building%2C_Pearson_UWC.jpg'},
  {name: "United World College of South East Asia", region: "Asia-Pacific", age: "2-18", location: "Singapore", founded: 1975, image: 'https://www.roundsquare.org/media/3907/uwcsea-east.jpg'},
  {name: "Waterford Kamhlaba UWC of Southern Africa", region: "Africa", age: "11-20", location: "Mbabane, Swaziland", founded: 1981, image: 'https://reaaally.files.wordpress.com/2009/03/dsc03859.jpg'},
  {name: "United World College-United States of America", region: "Americas", age: "16-19", location: "Montezuma, New Mexico, United States", founded: 1982, image: 'http://uwccommindia.net/uwc/images/UWC-USA.jpg'},
  {name: "United World College of the Adriatic", region: "Europe", age: "16-19", location: "Duino, Italy", founded: 1982, image: 'https://www.uwcad.it/ProxyVFS.axd/image_hd/r14880/sr_aboutUs-jpg?v=7953&ext=.jpg'},
  {name: "Li Po Chun United World College", region: "Asia-Pacific", age: "16-19", location: "Wu Kai Sha, Hong Kong", founded: 1992, image: 'https://i.ytimg.com/vi/9HG-whB72qo/maxresdefault.jpg'},
  {name: "Red Cross Nordic United World College", region: "Europe", age: "16-19", location: "Flekke, Norway", founded: 1995, image: 'https://uwcrcn.no/wp-content/uploads/2013/10/Winter.jpg'},
  {name: "Mahindra United World College of India", region: "Asia-Pacific", age: "16-19", location: "Village Khubavali, India", founded: 1997, image: 'https://i.ytimg.com/vi/TIBiZ9ERSeA/maxresdefault.jpg'},
  {name: "United World College Costa Rica", region: "Americas", age: "16-19", location: "Santa Ana, Costa Rica", founded: 2006, image: 'http://uwckenya.org/wp-content/uploads/2016/12/uwc-costa-rica-facilities-02.jpg'},
  {name: "United World College in Mostar", region: "Europe", age: "16-19", location: "Mostar, Bosnia and Herzegovina", founded: 2006, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mostar_Gymnasium.jpg/220px-Mostar_Gymnasium.jpg'},
  {name: "United World College Maastricht", region: "Europe", age: "2-18", location: "Maastricht, Netherlands", founded: 2009, image: 'http://i2.wp.com/aasarchitecture.com/wp-content/uploads/2014/01/UWC-Maastricht-by-Frencken-Scholl-Architecten03.jpg'},
  {name: "Robert Bosch United World College", region: "Europe", age: "16-19", location: "Freiburg, Germany", founded: 2014, image: 'https://hongkongcitygirl.files.wordpress.com/2014/09/dsc06367.jpg'},
  {name: "United World College Dilijan", region: "Europe", age: "16-19", location: "Dilijan, Armenia", founded: 2014, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/UWC_Dilijan.jpg/1200px-UWC_Dilijan.jpg'},
  {name: "United World College Changshu China", region: "Asia-Pacific", age: "15-19", location: "Changshu, China", founded: 2015, image: 'http://www.reacheducation.org/reowebsite/wp-content/uploads/2015/02/UWC-Chinese-Academy-e1425278548952.jpg'},
  {name: "United World College Thailand", region: "Asia-Pacific", age: "2-18", location: "Phuket, Thailand", founded: 2016, image: 'https://live.phuketindex.com/wp-content/uploads/2017/02/uwct05.jpg'},
  {name: "UWC ISAK Japan", region: "Asia-Pacific", age: "15-19", location: "Karuizawa, Japan", founded: 2017, image: 'http://www.u-tokyo.ac.jp/en/about/publications/tansei/13/images/image_52.jpg'}
];

export default schools;