(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
 
       function getNowYMDhmsStr(){
        const date = new Date()
        const Y = date.getFullYear()
        const M = ("00" + (date.getMonth()+1)).slice(-2)
        const D = ("00" + date.getDate()).slice(-2)
        const h = ("00" + date.getHours()).slice(-2)
        const m = ("00" + date.getMinutes()).slice(-2)
        const s = ("00" + date.getSeconds()).slice(-2)
        return Y + M + D + h + m + s
      };

      const userArray = ["test1", "test2", "test3", "test4","test5", "test6", "test7", "test8","test9", "test10"]
          
       let nowUser = userArray[Math.floor(Math.random() * userArray.length)];
       console.log(`今あなたは　${nowUser}です`)

        // Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
//                 id: "TestUser1"
                // ユニークなユーザーを吐き出したかったら以下を利用する
                id:              `${nowUser}`
                // email:        // Recommended if using Pendo Feedback, or NPS Email
                // full_name:    // Recommended if using Pendo Feedback
                // role:         // Optional

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
//                 id: "TestUser1"
                // ユニークなユーザーを吐き出したかったら以下を利用する
                id:           `${nowUser}` // Required if using Pendo Feedback
                // name:         // Optional
                // is_paying:    // Recommended if using Pendo Feedback
                // monthly_value:// Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
})('e04fd3c7-c8c7-479e-6e83-dc727b588d0a');
