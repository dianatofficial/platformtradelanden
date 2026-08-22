class Cache_802:
    def __init__(self):
        self._store = {}
    def get(self, k):
        return self._store.get(k)
