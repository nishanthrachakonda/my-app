import './App.css';
import data from './input.json';

function App() {
  const textRender = (text, bold, underline) => {
    return (
      <span style={{fontWeight: bold === undefined ? "normal": "bold", textDecorationLine: underline === undefined ? "none" : "underline"}}> {text} </span>
    )
  }
  const elementRender = (type, title, children, elm_color) => {
    if (type === 'block') {
      return (
        <div id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </div>
      )
    }
    else if (type === 'h1') {
       return (
         <h1 id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
         {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </h1>
      )   
    }
    else if (type === 'p') {
      return (
        <p id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </p>
      )
    }
    else if(type === 'h4') {
      return (
        <h4 id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </h4>
      )
    }
    else if(type === 'ul') {
      return (
        <ul id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ul>
      )
    }
    else if(type === 'li') {
      return (
        <li id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </li>
      )
    }
    else if(type === 'clause') {
      return (
        <li id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </li>
      )
    }
    else if(type === 'lic') {
      return (
        <span id={title} style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </span>
      )
    }
    else {
       return (
        <span style={{backgroundColor: elm_color === undefined ? "white" : elm_color}}>
        <ol>
        {children !== undefined && children.map((child) => (
          renderJson(child)
        ))}
        </ol>
        </span>
      )
    } 
  }
  const renderJson = element => {
      return (
        <span> 
          {element.type !== undefined && elementRender(element.type, element.title, element.children, element.color)} 
          {element.text !== undefined && textRender(element.text, element.bold, element.underline)} 
        </span>
      )  
  }
  return (
      <div>
        {data.map((element) => (
          renderJson(element)
        ))}
      </div>
  );
}

export default App;
