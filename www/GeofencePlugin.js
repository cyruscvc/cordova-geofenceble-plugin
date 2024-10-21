var GeofencePlugin = {
    initialize: function(successCallback, errorCallback) {
        window.geofence.initialize().then(successCallback).catch(errorCallback);
    },

    addOrUpdate: function(geofence, successCallback, errorCallback) {
        window.geofence.addOrUpdate(geofence).then(successCallback).catch(errorCallback);
    },

    onTransitionReceived: function(callback) {
        window.geofence.onTransitionReceived = callback;
    }
};

module.exports = GeofencePlugin;
