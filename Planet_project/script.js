const txt = document.getElementById('box1')
const txt2 = document.getElementById('box2')
const txt3 = document.getElementById('box3')

const txtbox = document.getElementById('PLTinform')


const middletxt = `Neptunes internal structure resembles that of Uranus. 
Its atmosphere forms about 5 to 10% of its mass and extends perhaps 10 to 20% of the way towards the core, 
where it reaches pressures of about 10 GPa, or about 100,000 times that of Earth's atmosphere. 
Increasing concentrations of methane, 
ammonia and water are found in the lower regions of the atmosphere`


const fronttxt = `Neptune is the eighth planet from the Sun and the farthest known solar planet. 
In the Solar System, it is the fourth-largest planet by diameter, 
the third-most-massive planet, and the densest giant planet. 
It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. 
Neptune is denser and physically smaller than Uranus because 
its greater mass causes more gravitational compression of its atmosphere.`


const endtxt = `Being composed primarily of gases and liquids, 
                it has no well-defined "solid surface"`

function hopetxt2(){
    txtbox.textContent =middletxt;

    // if (txtbox.textContent == middletxt){
    //      txtbox.textContent = fronttxt
    // }
  
}
console.log(txt)

document.addEventListener('click',hopetxt2);