import '../App.css';

const NestedList =({items}) => (
    <div >
        
      {
        items.map((item, index)=>(
          <div key={index}>
            {Array.isArray(item) ? (
              <ul>
              <NestedList  items={item} />
            </ul>
            ) : (
              
              <li>           
                  {item}
              </li>
              
            )}
          </div>
        ))
      }
    </div>
  )

  
  
  export default NestedList;

