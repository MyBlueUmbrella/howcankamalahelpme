var conditionsDict = {};

// Add key-value pairs to the dictionary
conditionsDict["senior"] = {"kamala": `
<p>Kamala Harris is committed to improving the lives of seniors through several key initiatives:</p>
<ul>
<li><b>Strengthening Social Security:</b> Protecting and expanding Social Security benefits to ensure a secure retirement.</li>
<li><b>Lowering Prescription Drug Costs:</b> Implementing measures to reduce the cost of medications, making healthcare more affordable for seniors.</li>
<li><b>Improving Access to Healthcare:</b> Expanding Medicare and safeguarding it against cuts to help seniors receive the care they need.</li>
<li><b>Enhancing Support for Caregivers:</b> Providing resources and assistance to family caregivers to help them care for their loved ones.</li>
<li><b>Expanding Housing Options:</b> Ensuring affordable and accessible housing for seniors to live independently.</li>
</ul>
<p>These initiatives reflect her commitment to ensuring that seniors can live with dignity and security.</p>
`, "trump": `
<p>Donald Trump has a track record of implementing policies that directly harm seniors. If re-elected, <b>he would likely attempt to cut Medicare and Social Security benefits</b>, jeopardizing your health care and financial security. His administration's efforts to repeal the Affordable Care Act would <b>threaten access to critical health services</b>, including protections for pre-existing conditions that disproportionately affect seniors. Additionally, his tax cuts primarily benefited the wealthy while <b>adding to the national deficit</b>, putting future funding for essential programs at risk. These are just a few examples of how <b>Trump's policies and priorities would make life worse for seniors.</b></p>
`};



function displayContent() {
    var conditionKey = "";
    ["age", "home", "parent", "work"].forEach((category) => {
        document.querySelectorAll('input[name="' + category + '"]').forEach(cb => {
            if (cb.checked) {
                conditionKey += cb.id
            }
        });
    });
    
    const resultContent = conditionsDict[conditionKey];
    const resultDiv = document.getElementById('result');

    if (resultContent != undefined) {
        resultDiv.innerHTML = "<h2>Kamala Harris will:</h2>" + resultContent.kamala + "<br>" +
            "<h2>Conversely, Trump:</h2>" + resultContent.trump + "<br>";
    } else { 
        resultDiv.innerHTML = "<p>Woah, crazy combination here!</p>";
    }
}

function makeExclusive(checkbox) {
  const checkboxes = document.querySelectorAll('input[name=' + checkbox.name + ']');
  checkboxes.forEach(cb => {
    if (cb !== checkbox) {
      cb.checked = false;
    }
  });
}
