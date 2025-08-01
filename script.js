document.getElementById("playbook-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const yourname = document.getElementById("yourname").value.trim();
  const persona = document.getElementById("persona").value.trim();
  const goal = document.getElementById("goal").value;
  if (!yourname || !persona || !goal) return;
  const content = generatePlaybook(yourname, persona, goal);
  document.getElementById("result-content").innerHTML = content;
  document.getElementById("output").classList.remove("hidden");
});

document.getElementById("download-btn").addEventListener("click", function () {
  const content = document.getElementById("result-content").innerHTML;
  const blob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "choz-playbook.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

function generatePlaybook(name, persona, goal) {
  let goalMap = {
    "book-call": "Your goal is to request an informational interview with someone currently working as a " + persona + ".",
    "introduce-product": "Your goal is to pitch yourself as a candidate for an open " + persona + " position.",
    "follow-up-demo": "Your goal is to follow up with someone you met at a career fair or networking event regarding a " + persona + " role."
  };
  return `
    <p><strong>Target Role:</strong> ${persona}</p>
    <p>${goalMap[goal]}</p>

    <h3>📬 First-Touch Message</h3>
    <p>Hi ${persona},<br><br>
    My name is ${name}, a college student passionate about tech and sales. I came across your role and would be grateful for a quick chat to learn from your journey. Would you be open to a 15-minute conversation this week?</p>

    <h3>📈 Follow-Up Sequence</h3>
    <ul>
      <li><strong>+2 days:</strong> Just bumping this up — I’d really value your insights!</li>
      <li><strong>+5 days:</strong> Saw your recent work at [Company] — would love to learn more about what you’re building.</li>
      <li><strong>+8 days:</strong> Totally understand if now’s not the best time — I’ll stay tuned to your journey!</li>
    </ul>

    <h3>🧠 Objection Handling</h3>
    <p><strong>“We’re not hiring.”</strong><br>No worries — I’m here to learn, not pitch. Just trying to connect with people I admire!</p>
    <p><strong>“I’m too busy.”</strong><br>I totally get it — even a quick message back would mean a lot. Thanks for considering it.</p>

    <h3>📞 Talk Track (Phone Call)</h3>
    <p>Hi ${persona}, this is ${name}. I’ll keep it super brief — I’m a student aiming for a role in tech sales and was hoping to learn from someone doing it. Would 10 minutes sometime this week work for a call?</p>
  `;
}
