public class ConversionController {
    private long id;
    private double argAmount;
    private double dollarBuy;
    private double dollarSell;
    private double result;

    public ConversionController();

    public ConversionController(long id, double argAmount, double dollarBuy, double dollarSell, double result) {
        this.id = id;
        this.argAmount = argAmount;
        this.dollarBuy = dollarBuy;
        this.dollarSell = dollarSell;
        this.result = result;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getArgAmount() {
        return argAmount;
    }

    public void setArgAmount(double argAmount) {
        this.argAmount = argAmount;
    }

    public double getDollarBuy() {
        return dollarBuy;
    }

    public void setDollarBuy(double dollarBuy) {
        this.dollarBuy = dollarBuy;
    }

    public double getDollarSell() {
        return dollarSell;
    }

    public void setDollarSell(double dollarSell) {
        this.dollarSell = dollarSell;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }
}