import React,{useState} from 'react' // importes use state hook
import propTypes from 'prop-types'
export default function TextForm(props1) {
  const [text,setText] = useState('');
  // default text= 'enter tex here' , and whenever i change it ... it becomes new text
  //settext will update everywhere  
  // we can't update it like normal function u have to use set text setText('ddbdjh);
  
  const handleUpClick =()=>{
    // console.log('upercase was clicked');
    let newText =text.toUpperCase();
    setText(newText)
    props1.showalert("upgraded to upercase","succes")
  }
   const handleOnChange =(event)=>{
    // console.log('upercase was cliaaacked');
    setText(event.target.value)
  }
  const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props1.showalert("upgraded to lowercase","succes")
  }
  const Clear =()=>{
    let newText='';
    setText(newText)
  }
  const[pc,setpc]=useState('click here');
  const  pallindromechecker = () =>{
    var rstring = "";
    for (var i = text.length - 1; i >= 0; i--) { 
        rstring += text[i]; // or rstring = rstring + text[i];
    }
    if(text.length===0){
      setpc('please write something')
    }
    else if(rstring===text){
      setpc('it is a pallindrome ')
    }
    else{
      setpc('it is not a pallindrome')
    }
  }
  const res = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  }
  const copyt = ()=>{
    navigator.clipboard.writeText(text)
    props1.showalert("copied to clipboard","succes")
    // text.execCommand('copy');
  }
  function counterr(text){
    if(text.length===0){
      return 0;
    }
    else if(text.length===1){
      if(text[0]===' '){
        return 0;
      }
      else{
        return 1;
      }
    }
    let count;
    if(text[0]===' ')count=0;
    else{
      count=1;
    }
    for(let i=1 ; i<text.length ; i++){
      if(text[i]!==' ' && text[i-1]===' '){
        count++;
      }
    }
    return count;
  }
  return (
    <>
    <div>
      <form>
  <div className="form-group my-3 container">
    <h1 className = " my-2" style={{color : props1.mode1==='dark' ? 'white' : 'black '}} >{props1.heading}</h1>
    <textarea className="form-control" style={{backgroundColor : props1.mode1==='dark' ? 'lightgrey' : 'white '}} value={text} onChange={handleOnChange} id="meraBaxa" rows="6" ></textarea>
    
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>convert to upper case</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>convert to lower case</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={Clear}>Clear Text</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={pallindromechecker}>pallindrome checker -> {pc}</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={copyt}>copy to clipboard</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={res}>remove extra space</button>
  </div>
      </form>
    </div>

    <div className="container" style={{color : props1.mode1==='dark' ? 'white' : 'black'}}>
      <h1 className='py-0'>your text summary</h1>
      
      <p className='my-1'>{`${counterr(text)} words and ${text.length} charecters`}</p>
      <p>you will take {text.length/125} minutes to read</p>
    </div>
    </>
  )
}
TextForm.propTypes={
  mode1 : propTypes.string,
  heading : propTypes.string.isRequired// isrequired means u have to fill it
}
// value -> here text is a state variable , onchange fuction is using settext to change it
// event target value(what event user is doing put taht value)
