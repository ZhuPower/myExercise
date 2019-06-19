let into = {
	domeEl:{
		oBanner:null,
		oFocus:null,
		oUl:null,
		aLi:null,
		aLilen:0,
		oBannerWidth:0,
		aSpan:null,
		newUl:null,
		newMain:null,
		newLi:null,
		newLilen:0,
		newBox:null
	},
	setDefault(){
		let domeEl = this.domeEl
		domeEl.oBanner = document.getElementById('banner')
		domeEl.oFocus = document.getElementById('b-focus')
		domeEl.oUl = domeEl.oBanner.getElementsByTagName('ul')[0]
		domeEl.aLi = domeEl.oUl.children
		domeEl.aLilen = domeEl.aLi.length
		domeEl.oBannerWidth = domeEl.oBanner.clientWidth
		domeEl.oFocus.nIndex = 0
		domeEl.oBanner.itime = null
		domeEl.oUl.direction = true
		domeEl.oUl.nIndex = 0
		domeEl.oUl.itime = null

		domeEl.newUl = document.getElementById('newUl')
		domeEl.newMain = document.getElementById('newMain')
		domeEl.newLi = domeEl.newUl.children
		domeEl.newLilen = domeEl.newLi.length
		domeEl.newBox = domeEl.newMain.children

		let node = domeEl.aLi[0].cloneNode(true)
		domeEl.oUl.appendChild(node)
		for(let i=0;i<domeEl.aLilen+1;i++){
			if(i<domeEl.aLilen){
				let oSpan=document.createElement("span")
				domeEl.oFocus.appendChild(oSpan)
			}
			domeEl.aLi[i].style.width = domeEl.oBannerWidth+'px'
		}
		domeEl.oUl.style.width = domeEl.oBannerWidth*(domeEl.aLilen+1)+'px'
		domeEl.aSpan = domeEl.oFocus.getElementsByTagName('span')
		domeEl.aSpan[0].className = 'active'
	},
	clickSpan(){
		let domeEl = this.domeEl
		for(let i=0;i<domeEl.aSpan.length;i++){
			domeEl.aSpan[i].onclick = () => {
				for(let ii=0;ii<domeEl.aSpan.length;ii++){domeEl.aSpan[ii].className = ''}
				domeEl.aSpan[i].className = 'active'
				this.move({left:-i*domeEl.oBannerWidth+'px'})
			}
		}
	},
	mouseOut(){
		let domeEl = this.domeEl
		clearInterval(domeEl.oBanner.itime)
		domeEl.oBanner.itime = setInterval(() => {this.moveLeft()},3000)
	},
	mouseOver(){
		let domeEl = this.domeEl
		clearInterval(domeEl.oBanner.itime)
	},
	moveLeft(){
		let domeEl = this.domeEl
		let setUlLeft =null
		domeEl.oUl.nIndex = 0
		domeEl.oFocus.nIndex++
		domeEl.oUl.nIndex = domeEl.oFocus.nIndex
		if(domeEl.oFocus.nIndex == domeEl.aLilen){
			domeEl.oFocus.nIndex = 0
			setUlLeft = function (){domeEl.oUl.style.left='0px'}
		}
        for(let ii=0;ii<domeEl.aSpan.length;ii++){domeEl.aSpan[ii].className = ''}
		domeEl.aSpan[domeEl.oFocus.nIndex].className = 'active'
		this.move({left:-domeEl.oUl.nIndex*domeEl.oBannerWidth+'px'},setUlLeft)
	},
	move(json,endFn){
		let domeEl = this.domeEl
		let oldLeft = parseInt(this.getStyle(domeEl.oUl,'left'))
		let newleft = parseInt(json.left)
		if(newleft>oldLeft){
			domeEl.oUl.direction = true
			this.moving(oldLeft,newleft,endFn)
		}else{
			domeEl.oUl.direction = false
			this.moving(oldLeft,newleft,endFn)
		}
	},
	moving(oldLeft,newleft,endFn){
		let domeEl = this.domeEl
		let num = 50
		let onOff = false
		clearInterval(domeEl.oUl.itime)
		domeEl.oUl.itime = setInterval(() =>{
			if(domeEl.oUl.direction){
				oldLeft+=num
				if(oldLeft>=newleft){
					oldLeft = newleft
					onOff =true
					clearInterval(domeEl.oUl.itime)
				}
			}else{
				oldLeft-=num
				if(oldLeft<=newleft){
					oldLeft = newleft
					onOff =true
					clearInterval(domeEl.oUl.itime)
				}
			}
			domeEl.oUl.style.left = oldLeft +'px'
			if(onOff){endFn&&endFn()}
		},20)
	},
	getStyle(element,attr){
		if(window.getComputedStyle){
			return window.getComputedStyle(element,null)[attr]
		}else {
			return element.currentStyle[attr]
		}
	},
	setTab(){
		let domeEl = this.domeEl
		for(let i=0;i<domeEl.newLilen;i++){
			domeEl.newLi[i].onclick = () => {
				for(let ii=0;ii<domeEl.newLilen;ii++){
					domeEl.newLi[ii].className = ''
					domeEl.newBox[ii].style.display = 'none'
				}
				domeEl.newLi[i].className = 'active'
				domeEl.newBox[i].style.display = 'block'
			}
		}
	},
	run(){
		let domeEl = this.domeEl
		this.setDefault()
		this.clickSpan()
		this.setTab()
		clearInterval(domeEl.oBanner.itime)
		domeEl.oBanner.itime = setInterval(() => {this.moveLeft()},3000)
		domeEl.oBanner.onmouseover = () => {this.mouseOver()}
		domeEl.oBanner.onmouseout = () => {this.mouseOut()}
	}
}

window.onload = () => {into.run()}






