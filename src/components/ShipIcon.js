function ShipIcon(props) {
    return (
        <div className="ship-preview flex gap-5">
            {Array.from(Array(props.length).keys()).map((unit) => {
                return <div key={unit} className="ship-piece whole"></div>
            })}
        </div>
    )
}

export { ShipIcon }