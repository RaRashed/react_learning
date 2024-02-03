const Hero = (props) => {
    return (
        <div>
            <h1>{props.item['name']}</h1>
            <h1>{props.item['phone']}</h1>
            <h1>{props.item['city']}</h1>
            <div>
                <button onClick={props.btn}>Click</button>
           </div>
        </div>
    );
};

export default Hero;