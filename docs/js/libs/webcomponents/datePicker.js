const container = document.getElementById('date-time-picker')
const result = document.getElementById('date-time-picker-result')

const template = function(text, props){
    return `
        <div style="width:380px;padding:15px">
            <dnx-dropdown data-idx="mydropdown" height="154px" name="Before" value="before">
                <dnx-dropdown-item name="Before" value="before"></dnx-dropdown-item>
                <dnx-dropdown-item name="After" value="after"></dnx-dropdown-item>
                <dnx-dropdown-item name="Between" value="between"></dnx-dropdown-item>
            </dnx-dropdown>
            <dnx-date-picker data-idx="mydate" max-date="${ (new Date()).toString() }"></dnx-date-picker>
            <dnx-time-picker data-idx="mytime"></dnx-time-picker>
        </div>
    `
}

const content =  document.createElement("div")
content.innerHTML = template`${{}}`
container.insertBefore(content, null)

container.addEventListener('change', (e) => {
    const node = e.target,
        idx = e.target.dataset.idx,
        mydropdown = document.querySelector('dnx-dropdown'),
        mydate = document.querySelector('dnx-date-picker'),
        mytime = document.querySelector('dnx-time-picker')
        date = mydate.value && !mydate.error ? mydate.value : null,
        time = mytime.value && !mytime.error ? mytime.value : null

    let value = null
    if(date && time){
        value = new Date(date)
        value.setHours( (new Date(time)).getHours() )
        value.setMinutes( (new Date(time)).getMinutes() )
    }  
    let resultText = 
    `Change event on ${idx}<br/><br/>
    New value:  ${node.value}<br/><br/>
    Date | Time: <strong>${ value ? value.toString() : "Invalid Date Time" }</strong>
    `
    result.innerHTML = resultText
})
