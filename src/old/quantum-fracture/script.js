/* global Vue */
new Vue({
  el: '#app',
  data: {
    iteraciones:1,
  },
	computed:{
    /**
     * return an html string with number Pi in amber color.
     */
    prettyResult(){
      const piArray = ["3",".","1","4","1","5","9","2","6","5","3","5","8","9","7","9","3","2","3","8"]
      const num = this.result.toString()
      var result="<span class='amber-text'>"
      var map = Array.prototype.map
      var stop=false
      map.call(num,(number,index)=>{
        if(number !==piArray[index] && !stop){
          stop=true
          result+="</span>"
        }
        result+=number
      })
      return result
    },
    /**
     * Calculates Pi with the Basea formula
     */
		result(){
			var result=0
			for(var i=1;i<=this.iteraciones;i++){
				result+=1/(Math.pow(i,2))
			}
			// return result
			return Math.sqrt(result*6)
		}
	},
	methods:{
		divideBy10(){
			this.iteraciones/=10
			this.constrain()
		},
		multiplyBy10(){
			this.iteraciones*=10
			this.constrain()
		},
    plus1(){
			this.iteraciones+=+1
			this.constrain()
		},
		constrain(){
			if(this.iteraciones<1)
				this.iteraciones=1
			if(this.iteraciones>=10000000)
				this.iteraciones=10000000
      this.iteraciones=Math.floor(this.iteraciones)
		}
	}
})
