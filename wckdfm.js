var conditionsDict = {};

// Add key-value pairs to the dictionary
conditionsDict["senior"] = {"kamala": `
<ul class="space-y-6">
            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Increase Social Security Benefits:</b>
                <p class="text-base">
                    Kamala Harris wants to boost Social Security benefits to help seniors feel more financially secure. 
                    This means raising the benefits and adjusting them for inflation so they keep up with the rising cost of living.
                    <a href="https://kamalaharris.org/issues/social-security/" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>

            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Expand Home and Community-Based Care:</b>
                <p class="text-base">
                    Kamala Harris plans to put more money into home and community care services, so seniors can get help at home instead of in a facility.
                    This includes more funding for caregiving programs and support services.
                    <a href="https://www.harris.senate.gov/about/policies" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>

            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Better Medical Care for Seniors:</b>
                <p class="text-base">
                    Kamala Harris wants to fund programs for doctors, nurses, and health care providers to train on geriatric-specific issues and care,
                    so that you have the best medical care possible.
                    <a href="https://www.hhs.gov/about/news/2024/07/01/biden-harris-administration-invests-over-200-million-help-primary-care-doctors-nurses-other-health-care-providers-improve-care-older-adults.html" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>
        </ul>
`, "trump": `
<ul class="space-y-6">
            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Proposed Cuts to Social Security:</b>
                <p class="text-base text-gray-700">
                    Donald Trump has supported proposals to cut Social Security benefits and has suggested reducing the program’s funding. 
                    Critics argue that these cuts would undermine financial security for seniors who rely on Social Security for their retirement income.
                    <a href="https://www.cnbc.com/2020/09/01/trump-signaled-he-would-cut-social-security.html" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>
            
            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Failure to Address Prescription Drug Costs:</b>
                <p class="text-base text-gray-700">
                    Despite promises to lower prescription drug prices, Trump's administration did not advance significant measures to reduce costs for seniors. 
                    The lack of comprehensive action on this issue left many seniors facing high out-of-pocket expenses for their medications.
                    <a href="https://www.politico.com/news/2020/06/04/trump-prescription-drug-prices-295044" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>
        </ul>
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
        resultDiv.innerHTML = "<h2 class=\"text-2xl font-bold mb-6\">Kamala Harris will:</h2>" + resultContent.kamala + "<br>" +
            "<h2 class=\"text-2xl font-bold mt-8 mb-4\">Conversely, Donald Trump will:</h2>" + resultContent.trump + "<br>";
    } else { 
        resultDiv.innerHTML = "<p>Woah, crazy combination here!</p>";
    }
    resultDiv.style.display = 'block';
}

function makeExclusive(checkbox) {
  const checkboxes = document.querySelectorAll('input[name=' + checkbox.name + ']');
  checkboxes.forEach(cb => {
    if (cb !== checkbox) {
      cb.checked = false;
    }
  });
}
