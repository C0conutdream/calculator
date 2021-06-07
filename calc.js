
        function display(val)
        {
        
         let v = document.getElementById("textval").value 
         if(v.length > 5){
             return v;
         } else{
         v = document.getElementById("textval").value+=val
         return v;
         }

         }
        function clr()
        {
         document.getElementById("textval").value = ""
        }
        function calculate(){
            let string = document.getElementById("textval").value 
            let arr = string.split('');
            let n = "";
            let nums = []; 
            let actions = [];
            let last = arr.length-1;


            if (arr[last]== "*" || arr[last]== "/" || arr[last]== "+" || arr[last]== "-"){
                document.getElementById("textval").value = "Error";
                return 1;
            }


            for (var i =0; i < arr.length; i++){
                if (arr[i]== "*" || arr[i]== "/" || arr[i]== "+" || arr[i]== "-"){
                    nums.push(n);
                    n = "";
                    actions.push(arr[i]);
                } else { 
                    n += arr[i];
                }
                if (i == arr.length - 1){
                    nums.push(n);
                }

            }

        
            let t = actions.indexOf('*'); 
            let d = actions.indexOf('/');
            //  while 
             if (t >= 0 || d >= 0)
            {    
                if (t < 0){
                    t = 10; 
                } if(d< 0){
                    d = 10; 
                }
            if (t >=0 && t < d){
                let n = (parseInt(nums[t]) * parseInt(nums[t+1]));
                nums[t+1] = n;
                nums.splice(t,1);
                actions.splice(t,1);
                t = actions.indexOf('*'); 
            }
               if (d >=0 && d < t) {
                    let n = (parseInt(nums[d]) / parseInt(nums[d+1]));
                    nums[d+1] = n;
                    nums.splice(d,1);
                    actions.splice(d,1);
                    d = actions.indexOf('/'); 
                }
            }
            if (nums.length > 1){
            for(var l = 0; nums.length > 1; l++){
             let n  = parseInt(nums[0]); 
             let m = parseInt(nums[1])
             nums.shift(); 
             nums.shift(); 
             
                if(actions[l] == "+"){
                        
                        let r = n + m; 
                        nums.unshift(r); 
                    } else {
                        nums.unshift(n-m);
                    }     
                }   
            }
                document.getElementById("textval").value = nums[0];
          }