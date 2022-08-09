import {useEffect} from 'react';


export default function ScrollBody() {

  
    
  useEffect(() => {
    
    // 👇️ scroll to top on page load  
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
    var scrollpos = window.scrollY;
    const chevron = document.getElementsByClassName("chevron-scroll");

    function add_class_on_scroll() {
      chevron[0].classList.add("activo");
    }

    function remove_class_on_scroll() {
      chevron[0].classList.remove("activo");
    }
    window.addEventListener('scroll', function(){ 
        //Here you forgot to update the value
        scrollpos = window.scrollY;

        if(scrollpos > 400){
            add_class_on_scroll();
        }
        else {
            remove_class_on_scroll();
        }
    });


  }, []);

  return (
    
    <div>
    

      <div style={{height: 'auto'}} />

      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        
      >
       <div id="go-top" className="chevron-scroll" data-tab="#header,0"><i className="ui chevron up inverted middle icon"></i></div>
      </button>
    </div>
  );
}