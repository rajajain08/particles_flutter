/// Controller for manually triggering a [BurstEmitter].
///
/// Pass this to [BurstEmitter.controller] and call [trigger()] from gesture
/// callbacks, game events, or any external logic.
class BurstEmitterController {
  int _pendingTriggers = 0;
  bool _stopped = false;

  /// Queue one burst. Safe to call rapidly — each call adds one burst cycle.
  void trigger() {
    if (!_stopped) _pendingTriggers++;
  }

  /// Stop all future auto-repeat cycles and drain pending triggers.
  void stop() {
    _stopped = true;
    _pendingTriggers = 0;
  }

  /// Re-enable after [stop()] and reset pending trigger count.
  void reset() {
    _stopped = false;
    _pendingTriggers = 0;
  }

  // --- Engine-facing API (not part of public user contract) ---

  bool get isStopped => _stopped;

  bool get hasPendingTrigger => _pendingTriggers > 0;

  /// Consume one pending trigger. Returns true if a trigger was consumed.
  bool consumeTrigger() {
    if (_pendingTriggers > 0) {
      _pendingTriggers--;
      return true;
    }
    return false;
  }
}
