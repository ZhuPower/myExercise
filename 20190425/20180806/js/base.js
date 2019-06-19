var into = {
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
	setDefault:function(){
		var domeEl = this.domeEl
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

		var node = domeEl.aLi[0].cloneNode(true)
		domeEl.oUl.appendChild(node)
		for(var i=0;i<domeEl.aLilen;i++){
			var oSpan=document.createElement("span")
			domeEl.oFocus.appendChild(oSpan)
		}
		this.setSize()
		domeEl.aSpan = domeEl.oFocus.getElementsByTagName('span')
		domeEl.aSpan[0].className = 'active'
	},
	setSize:function(){
		var domeEl = this.domeEl
		domeEl.oBannerWidth = domeEl.oBanner.clientWidth
		for(var i=0;i<domeEl.aLilen+1;i++){
			domeEl.aLi[i].style.width = domeEl.oBannerWidth+'px'
		}
		domeEl.oUl.style.width = domeEl.oBannerWidth*(domeEl.aLilen+1)+'px'
	},
	clickSpan:function(){
		var that = this
		var domeEl = this.domeEl
		for(var i=0;i<domeEl.aSpan.length;i++){
			domeEl.aSpan[i].n = i 
			domeEl.aSpan[i].onclick = function(){
				for(var ii=0;ii<domeEl.aSpan.length;ii++){domeEl.aSpan[ii].className = ''}
				this.className = 'active'
				that.move({left:-this.n*domeEl.oBannerWidth+'px'})
			}
		}
	},
	mouseOut:function(){
		var that = this
		var domeEl = this.domeEl
		clearInterval(domeEl.oBanner.itime)
		domeEl.oBanner.itime = setInterval(function(){that.moveLeft()},3000)
	},
	mouseOver:function(){
		var domeEl = this.domeEl
		clearInterval(domeEl.oBanner.itime)
	},
	moveLeft:function(){
		var domeEl = this.domeEl
		var setUlLeft =null
		domeEl.oUl.nIndex = 0
		domeEl.oFocus.nIndex++
		domeEl.oUl.nIndex = domeEl.oFocus.nIndex
		if(domeEl.oFocus.nIndex == domeEl.aLilen){
			domeEl.oFocus.nIndex = 0
			setUlLeft = function (){domeEl.oUl.style.left='0px'}
		}
        for(var ii=0;ii<domeEl.aSpan.length;ii++){domeEl.aSpan[ii].className = ''}
		domeEl.aSpan[domeEl.oFocus.nIndex].className = 'active'
		this.move({left:-domeEl.oUl.nIndex*domeEl.oBannerWidth+'px'},setUlLeft)
	},
	move:function(json,endFn){
		var domeEl = this.domeEl
		var oldLeft = parseInt(this.getStyle(domeEl.oUl,'left'))
		var newleft = parseInt(json.left)
		if(newleft>oldLeft){
			domeEl.oUl.direction = true
			this.moving(oldLeft,newleft,endFn)
		}else{
			domeEl.oUl.direction = false
			this.moving(oldLeft,newleft,endFn)
		}
	},
	moving:function(oldLeft,newleft,endFn){
		var domeEl = this.domeEl
		var num = 50
		var onOff = false
		clearInterval(domeEl.oUl.itime)
		domeEl.oUl.itime = setInterval(function(){
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
	getStyle:function(element,attr){
		if(window.getComputedStyle){
			return window.getComputedStyle(element,null)[attr]
		}else {
			return element.currentStyle[attr]
		}
	},
	setTab:function(){
		var domeEl = this.domeEl
		for(var i=0;i<domeEl.newLilen;i++){
			domeEl.newLi[i].n = i
			domeEl.newLi[i].onclick = function(){
				for(var ii=0;ii<domeEl.newLilen;ii++){
					domeEl.newLi[ii].className = ''
					domeEl.newBox[ii].style.display = 'none'
				}
				this.className = 'active'
				domeEl.newBox[this.n].style.display = 'block'
			}
		}
	},
	run:function(){
		var that = this
		var domeEl = this.domeEl
		this.setDefault()
		this.clickSpan()
		this.setTab()
		clearInterval(domeEl.oBanner.itime)
		domeEl.oBanner.itime = setInterval(function(){that.moveLeft()},3000)
		domeEl.oBanner.onmouseover = function(){that.mouseOver()}
		domeEl.oBanner.onmouseout = function(){that.mouseOut()}
		window.onresize = function(){that.setSize()}
	}
}

window.onload = function(){into.run()}






