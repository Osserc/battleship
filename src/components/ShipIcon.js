function ShipIcon(props) {
    return (
        <div className="ship-preview flex gap-5">
            {Array.from(Array(props.whole).keys()).map((unit) => {
                return <div key={unit} className="ship-piece whole"></div>
            })}
            {Array.from(Array(props.damaged).keys()).map((unit) => {
                return <div key={unit} className="ship-piece damaged"></div>
            })}
        </div>
    )
}

export { ShipIcon }