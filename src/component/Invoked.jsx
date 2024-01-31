const Invoked = () => {
    let marks = 100;
    return (
            <div>
      {( () => {
        if (marks > 80 && marks < 100) {
            return <h1>A+</h1>
        }
        else if (marks >= 70 && marks < 80) {
          return <h1>A</h1>
        }
       })()}
    </div>
    );
};

export default Invoked;