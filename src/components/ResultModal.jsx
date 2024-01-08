import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref)
{
     
    const timeRemaning = (remainingTime / 1000).toFixed(2);
    const userLost = remainingTime <=0;
    const dialog = useRef();
    const score = Math.round(1 -remainingTime/ (targetTime * 1000)  * 100);

    useImperativeHandle(ref, () =>{
       return { 
            open() 
            { 
                dialog.current.showModal();
            },
            test(){
                alert("Yes working");
            },
            test1: "Hello"
        }
    })
return (
    <>
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
        {userLost ? <h2>You Lost</h2> : <h2>Your score is {score}</h2>}
        <p>The target time time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>{timeRemaning} second left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button >Close</button>
        </form>
    </dialog>
    </>
)

});

export default ResultModal;