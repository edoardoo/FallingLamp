   var physic = {
       ApplyUnitaryVerletIntegration: function (item, ellapsedTime, gravity, pixelsPerMeter) {
            item.x = 2 * item.x - item.old_x; // No acceleration here
            item.y = 2 * item.y - item.old_y + gravity * ellapsedTime * ellapsedTime * pixelsPerMeter;
        },

        ApplyUnitaryDistanceRelaxation: function (item, from, targettedLength) {
            var dx = item.x - from.x;
            var dy = item.y - from.y;
            var dstFrom = Math.sqrt(dx * dx + dy * dy);

            if (dstFrom > targettedLength && dstFrom != 0 ) {
                item.x -= (dstFrom - targettedLength) * (dx / dstFrom) * 0.5;
                item.y -= (dstFrom - targettedLength) * (dy / dstFrom) * 0.5;
            }
        }
    }