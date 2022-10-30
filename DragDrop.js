import React, { Component } from 'react'

export default class DragDrop extends Component {
  constructor(){
    super();
    this.state=({
      page:1,
    })
  }

  prevHandle=()=>{
        if(this.state.page===1){
        }
        else{
          this.setState({page:1})
          console.log(this.state.page)
        }
  }

  render() {
    return (
      // {this.state.page<=1 && <h2>lorem</h2>}
      <div className="container" id="section">
    <div className="row">
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot1"></span>Internships Certificate(s)</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}} />
              </div>
          </form>
      </div>

      
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
              <label className='lab mx-1'><span className="dot3"></span>Internships Certificate(s)</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot1"></span>Hackathons participation</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>

      <div className="row">
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Technical Bootcamps</label>
                <input type="file" className="hidden" multiple={false} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>


      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Club Activities organization</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Cultural Events like dance</label>
                <input type="file" className="hidden" multiple={false} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>
	  </div>    
</div>

{/* 
<div className='v' id='section 1'>
    <div className="row">
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Internships Certificate(s)</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>

      
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
              <label className='lab mx-1'><span className="dot3"></span>Internships Certificate(s)</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Hackathons participation</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Technical Bootcamps</label>
                <input type="file" className="hidden" multiple={false} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>

      
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Club Activities organization</label>
                <input type="file" className="hidden" multiple={true} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>
      <div className="col">
	      <form method="post" action="#" id="#">
              <div className="form-group files color">
                <label className='lab mx-1'><span className="dot3"></span>Cultural Events like dance</label>
                <input type="file" className="hidden" multiple={false} style={{cursor:"pointer"}}/>
              </div>
          </form>
      </div>
	  </div>    
    </div> */}
<div className="d-flex justify-content-between">
  <button className=" btn btn-primary btn-lg my-3" >prev</button>
  {/* <button className="btn btn-primary">button</button> */}
  <button className="btn btn-primary btn-lg my-3" >next</button>
</div>
</div>
    )
  }
}
