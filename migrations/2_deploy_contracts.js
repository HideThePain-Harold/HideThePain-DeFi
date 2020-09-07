const HidethepainToken = artifacts.require("./HidethepainToken.sol");
const HidethepainTokenSale = artifacts.require("./HidethepainTokenSale.sol");

module.exports = async function (deployer) {
	await deployer.deploy(HidethepainToken, 1000000);
	const hidethepainToken = await HidethepainToken.deployed();

	const tokenPrice = 225000000000000; //0.002 ether / 0.10usd
	await deployer.deploy(HidethepainTokenSale, hidethepainToken.address, tokenPrice);
	const hidethepainTokenSale = await HidethepainTokenSale.deployed();

	// Transfer 50 perc tokens to HidethepainTokenSale
	await hidethepainToken.transfer(hidethepainTokenSale.address, "500000");
};
