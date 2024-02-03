const Hero = (props) => {
          function Demo() {
                        alert('click');
                  }
    const PostFormData = (event) => {
        event.preventDefault();
             alert('form submitted')
         }
    return (
        <div>
            <h1>{props.item['name']}</h1>
            <h1>{props.item['phone']}</h1>
            <h1>{props.item['city']}</h1>
            <div>
                <button onClick={props.btn}>Click</button>
            </div>
             <div>
                <button onClick={
              Demo
                }>Event click</button>
            </div>
            <div>
                <form onSubmit={PostFormData}>
                    <input type='text' placeholder="write some thing"/>
                    <button type="submit"> form Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Hero;