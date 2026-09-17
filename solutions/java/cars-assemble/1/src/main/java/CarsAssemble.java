public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        int cars = 221;
        if (speed > 0 && speed <= 4) {
            return cars * speed;
        } else if (speed >= 5 && speed <= 8) {
            return cars * speed * (1 - 0.10);
        } else if (speed == 9) {
            return cars * speed * (1 - 0.20);
        } else {
            return cars * speed * (1 - 0.23);
        }
    }

    public int workingItemsPerMinute(int speed) {
        return (int) (productionRatePerHour(speed) / 60);
    }
}
