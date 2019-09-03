const Storage = new class {};

Storage.getStorage = () => window.localStorage;

Storage.get = (field) => Storage.getStorage().getItem(field);

Storage.save = (field, value) => Storage.getStorage().setItem(field, value);

Storage.remove = (field) => Storage.getStorage().removeItem(field)

Storage.clear = () => Storage.getStorage().clear();