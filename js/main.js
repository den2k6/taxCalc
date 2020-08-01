"use district";

{
  const btn = document.getElementById("button");
  btn.addEventListener("click", function () {
    let num0 = document.getElementById("num").value;

    let res = document.getElementById("result");
    res.innerText = (num0 / 1.1).toFixed(2);

    res = document.getElementById("result1");
    res.innerText = (num0 / 1.08).toFixed(2);
    res = document.getElementById("result2");
    res.innerText = (num0 * 1.08).toFixed(2);
    res = document.getElementById("result3");
    res.innerText = (num0 * 1.1).toFixed(2);
    console.log(num0);
  });
}
