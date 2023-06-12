import "./style.css";
function App() {
  const display = (element) => {
    let b = document.getElementById("cal").innerText;
    if (!b.includes("=")) {
      document.getElementById("cal").innerHTML = b + element;
      if (element === "=") solve(b + element);
    }
    scrollbottom();
  }
  function solve(ele) {
    if (ele.includes("+")) {
      let a = ele.split("+");
      let b = 0;
      for (let i in a) {
        b += Number.parseFloat(a[i]);
      }
      document.getElementById("result").innerHTML = b;
      document.getElementById('hist').innerHTML+=document.getElementById("cal").innerHTML+document.getElementById("result").innerHTML+"<br/>";
      document.getElementById("result").innerHTML='';
      document.getElementById("cal").innerHTML='';
    }
    if (ele.includes("/")) {
      let a = ele.split("/");
      let b = 1;
      for (let i in a) {
        if(i==='0')
        {
          b=Number.parseFloat(a[i]);
        }
        else
        b /= Number.parseFloat(a[i]);
      }
      document.getElementById("result").innerHTML = b;
      document.getElementById('hist').innerHTML+=document.getElementById("cal").innerHTML+document.getElementById("result").innerHTML+"<br/>";
      document.getElementById("result").innerHTML='';
      document.getElementById("cal").innerHTML='';
    }
    if (ele.includes("-")) {
      let a = ele.split("-");
      let b = 0;
      for (let i in a) {
        if(i==='0')
        {
          b=Number.parseFloat(a[i]);
        }
        else
        b =b- Number.parseFloat(a[i]);
      }
      document.getElementById("result").innerHTML = b;
      document.getElementById('hist').innerHTML+=document.getElementById("cal").innerHTML+document.getElementById("result").innerHTML+"<br/>";
      document.getElementById("result").innerHTML=' ';
      document.getElementById("cal").innerHTML=' ';
    }
    if (ele.includes("*")) {
      let a = ele.split("*");
      let b = 1;
      for (let i in a) {
        b *= Number.parseFloat(a[i]);
      }
      document.getElementById("result").innerHTML = b;
      document.getElementById('hist').innerHTML+=document.getElementById("cal").innerHTML+document.getElementById("result").innerHTML+"<br/>";
      document.getElementById("result").innerHTML='';
      document.getElementById("cal").innerHTML='';
    }
  }
  function scrollbottom() {
    document.getElementById("disp").scrollTop = document.getElementById("disp").scrollHeight;
  }
  const del=()=>{
    if(document.getElementById("result").innerHTML.length===0){
      let a=document.getElementById("cal").innerHTML;
      if(a[a.length-1]==='+' || a[a.length-1]==='-' || a[a.length-1]==='*' || a[a.length-1]==='/'){
        a=a.slice(0,a.length-1);
        document.getElementById("cal").innerHTML=a;
      }
      else{
        if(a.includes('+')){
          a=a.split('+');
          a.pop();
          if(a.length===1)
          a=a+'+';
          else
          a=a.join('+');
          document.getElementById("cal").innerHTML=a;
        }
        else if(a.includes('-')){
          a=a.split('-');
          a.pop();
          if(a.length===1)
          a=a+'-';
          else
          a=a.join('-');
          document.getElementById("cal").innerHTML=a;
        }
        else if(a.includes('*')){
          a=a.split('*');
          a.pop();
          if(a.length===1)
          a=a+'*';
          else
          a=a.join('*');
          document.getElementById("cal").innerHTML=a;
        }
        if(a.includes('/')){
          a=a.split('/');
          a.pop();
          if(a.length===1)
          a=a+'/';
          else
          a=a.join('/');
          document.getElementById("cal").innerHTML=a;
        }
      }
    }
  }
  return (
    <>
      <div id="body">
        <div id="disp">
          <div id="hist"></div>
          <div id="live">
            <span id="cal"></span>
            <span id="result"></span>
          </div>
        </div>
        <div id="calc">
          <div>
            <div
              className="a"
              onClick={() => {
                display(7);
              }}
            >
              7
            </div>
            <div
              className="a"
              onClick={() => {
                display(4);
              }}
            >
              4
            </div>
            <div
              className="a"
              onClick={() => {
                display(1);
              }}
            >
              1
            </div>
            <div
              className="a"
              style={{borderBottomLeftRadius:'10px'}}
              onClick={() => {
                display(0);
              }}
            >
              0
            </div>
          </div>
          <div>
            <div
              className="a"
              onClick={() => {
                display(8);
              }}
            >
              8
            </div>
            <div
              className="a"
              onClick={() => {
                display(5);
              }}
            >
              5
            </div>
            <div
              className="a"
              onClick={() => {
                display(2);
              }}
            >
              2
            </div>
            <div
              className="a"
              onClick={() => {
                display(".");
              }}
            >
              .
            </div>
          </div>
          <div>
            <div
              className="a"
              onClick={() => {
                display(9);
              }}
            >
              9
            </div>
            <div
              className="a"
              onClick={() => {
                display(6);
              }}
            >
              6
            </div>
            <div
              className="a"
              onClick={() => {
                display(3);
              }}
            >
              3
            </div>
            <div
              className="a"
              onClick={() => {
                display("=");
              }}
            >
              =
            </div>
          </div>
          <div>
            <div className="a" onClick={()=>{del()}}>del</div>
            <div
              className="a"
              onClick={() => {
                display("/");
              }}
            >
              /
            </div>
            <div
              className="a"
              onClick={() => {
                display("*");
              }}
            >
              *
            </div>
            <div
              className="a"
              onClick={() => {
                display("-");
              }}
            >
              -
            </div>
            <div
            style={{borderBottomRightRadius:'10px'}}
              className="a"
              onClick={() => {
                display("+");
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
